const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const description = document.querySelector('#description').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/post`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogpost/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blogpost');
      }
    }
  };
  const EditHandler = async (event) => {
    event.preventDefault();
    // Collect values from the form
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#description').value.trim();  
    
    if (event.target.children[2].children[0].getAttribute('data-id')) {
      const id = event.target.children[2].children[0].getAttribute('data-id');
  
      const response = await fetch(`/api/post/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit blogpost');
      }
    }
    

    // if (title && content) {
    //     // Send a POST request to the API endpoint
    //   const response = await fetch('/api/post/edit/', {
    //     method: 'PUT',
    //     body: JSON.stringify({ title, content }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     // If successful, redirect the browser to the dashboard page
    //     document.location.replace('/dashboard');
    //   } else {
    //     alert(response.statusText);
    //   } 
    // }
  };

  try {
    document
    .querySelector('.create-form')
    .addEventListener('submit', newPostHandler);
  } catch (error) {
    
  }
  try {
    document
    .querySelector('.edit-form')
    .addEventListener('submit', EditHandler);
  } catch (error) {
    
  }
  try {
    document
    .querySelector('.create-form')
    .addEventListener('submit', newPostHandler);
  } catch (error) {
    
  }
 
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  