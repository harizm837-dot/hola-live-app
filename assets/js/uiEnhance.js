// PAGE TRANSITION

document.addEventListener("click", function(e){
    const target = e.target.closest("a");
    if(target && target.href){
        e.preventDefault();
        document.body.style.opacity="0";
        setTimeout(()=>{
            window.location=target.href;
        },300);
    }
});

document.addEventListener("DOMContentLoaded", ()=>{
    document.body.style.opacity="0";
    setTimeout(()=>{ document.body.style.opacity="1"; },100);
});
