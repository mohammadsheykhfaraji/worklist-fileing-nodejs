exports.get404=(req,res)=>{
    res.status(404).render("404", { title: "صفحه مورد نظر پیدا نشد" });;
}