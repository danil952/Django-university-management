function show_interests()
{
    let inter_arr=["Программирование","Рисование","Книги"];
    inter_arr.forEach(x=>
        {
            let h=document.createElement('h2');
            h.innerHTML=x;
            document.body.appendChild(h);
        })
    
}