const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector('#Comment').value.trim();  
    const data = document.querySelector('#Comment');
    
    
  
    if (description) {
      const response = await fetch(`/api/comment/`, {
        method: 'POST',
        body: JSON.stringify({ description, user_id:data.dataset.uid,blogpost_id:data.dataset.bid}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //console.log(response)
      if (response.ok) {
        document.location.replace(`/blogpost/view/${data.dataset.bid}`);
      } else {
        alert('Failed to create project');
      }
    }
  };

  try {
    document
    .querySelector('.comment-form')
    .addEventListener('submit', newCommentHandler);
  } catch (error) {
    
  }
 