window.addEventListener('DOMContentLoaded'), (event) => {
  getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
  let count = 5;
  fetch(functionApi).then(response =>{
    return response.json()
  }).then)response => (
    console.log("Website called function API.");
    count = response.count;
    document.getElementById("counter").innerText = count;
  })
}
