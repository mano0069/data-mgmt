

(() => {
    const fetchData = () => {
      const url = 'https://random-data-api.com/api/v2/users?size=50';
  
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log('Original data:', data);
  
          
          let filteredArray = data.filter(user => user.address && (user.address.state === "California" || user.address.state === "Texas" || user.address.state === "Alaska"));
          console.log('Filtered data:', filteredArray);
  
          
          const newArray = filteredArray .map(user => ({
            uid: user.uid,
            full_name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            dob: user.date_of_birth,
            city: user.address.city,
            state: user.address.state,
            lat: user.address.coordinates.latitude,
            lng: user.address.coordinates.lng,
          }));
  
          
          const preElement = document.querySelector('pre');
          preElement.textContent = JSON.stringify(newArray, null, 2);
        })

        .catch(error => {
          console.error('Error fetching data:', error);

          displayError(error.message);
        });
    };
      const displayError = (errorMessage) => {
      const errorDialog = document.getElementById('errorDialog');
      const errorContent = document.getElementById('errorContent');
      const closeErrorButton = document.getElementById('closeError');
  
      errorContent.textContent = errorMessage;
      errorDialog.showModal();
  
      closeErrorButton.addEventListener('click', () => {
        errorDialog.close();
      });
    };
   
    document.getElementById('fetchButton').addEventListener('click', fetchData);
  })();
  

  
  