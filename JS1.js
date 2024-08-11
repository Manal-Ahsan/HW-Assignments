function totalsum(){
    let sum =0;
    for(i=0;i<10;i++){
    const value = Number(document.getElementById(`input${i}`).value );
    if(!isNaN(value)){
        sum +=value;}}
        const result = document.getElementById("result");
        const listItem = document.createElement('li');
        listItem.textContent = `Sum: ${sum}`;
        resultList.appendChild(listItem);
      }