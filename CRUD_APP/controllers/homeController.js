// import StudentModel from "../models/StudentSchema.js";

// const homeController=(req,res)=>{
//     res.render('index');
// }


// //Create

// const createController = async(req,res)=>{
//     //console.log(req.body)
//    record = await StudentModel({
//         name:req.body.name,
//         city:req.body.city,
//         email:req.body.email,
//         contact:req.body.contact
//     });
//     if(record){
//         await record.save();
//         console.log("data is saved");
//     }else{
//         console.log("data is not saved")
//     }
//     res.render('index');

// }

// export {homeController,createController};
import StudentModel from "../models/StudentSchema.js";

const homeController = (req, res) => {
    res.render('index');
}

// Create
const createController = async (req, res) => {
    try {
        // Create a new student record
        const record = new StudentModel({
            name: req.body.name,
            city: req.body.city,
            email: req.body.email,
            contact: req.body.contact
        });

        // Save the record to the database
        await record.save();
        console.log("Data is saved");

        // Render the index page with a success message
        res.render('index', { message: "Data saved successfully!" });
    } catch (error) {
        console.error("Data is not saved:", error);

        // Render the index page with an error message
        res.render('index', { message: "Data is not saved. Please try again." });
    }
}

export { homeController, createController };
