var icecream = require('../models/icecream');
// List of all Costumes
exports.icecream_list = function(req, res) {
 res.send('NOT IMPLEMENTED: icecream list');
};
// for a specific Costume.
exports.icecream_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.icecream_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: icecream create POST');
};
// Handle Costume delete form on DELETE.
exports.icecream_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.icecream_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};

// List of all Costumes
exports.icecream_list = async function(req, res) {
    try{
    theicecreams = await icecream.find();
    res.send(theicecreams);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.icecream_view_all_Page = async function(req, res) {
    try{
    theicecreams = await icecream.find();
    res.render('icecream', { title: 'icecream Search Results', results: theicecreams });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle Costume create on POST.
exports.icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.flavor = req.body.flavor;
    document.price = req.body.price;
    document.quantity = req.body.quantity;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   exports.icecream_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await icecream.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 

exports.icecream_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await icecream.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.flavor)  
               toUpdate.flavor = req.body.flavor; 
        if(req.body.price) toUpdate.price = req.body.price; 
        if(req.body.quantity) toUpdate.quantity = req.body.quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

exports.icecream_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await icecream.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

exports.icecream_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await icecream.findById( req.query.id) 
        res.render('icecreamdetail',  
{ title: 'Icecream Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.icecream_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('icecreamcreate', { title: 'Icecream Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.icecream_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await icecream.findById(req.query.id) 
        res.render('icecreamupdate', { title: 'Icecream Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
exports.icecream_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await icecream.findById(req.query.id) 
        res.render('icecreamdelete', { title: 'Icecream Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 