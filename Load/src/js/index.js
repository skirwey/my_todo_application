import '../scss/custom.scss';

function load(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data = {
                message: "Данные успешно загружены!",
            };
            
            const success = Math.random() > 0.5; 
            
            if (success) {
                resolve(data);
            } else {
                reject("Ошибка при внесении данных");
            }
        }, 5000);
    });
}
  

load()
    .then(function(result) {
        const loadDiv = document.querySelector('.load');
        loadDiv.innerHTML = `<p>${result.message}</p>`;
        loadDiv.style.backgroundColor = 'lightgreen'; 
    })
    .catch(function(error) {
        const loadDiv = document.querySelector('.load');
        loadDiv.innerHTML = `<p style="color: red;">${error}</p>`;
        loadDiv.style.backgroundColor = 'lightcoral'; 
    });

    