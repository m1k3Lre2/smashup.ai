document.addEventListener('DOMContentLoaded', function () {
    fetch('https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=YOUR_ACCESS_TOKEN')
        .then(response => response.json())
        .then(data => {
            const feedContainer = document.getElementById('instagram-feed');
            data.data.forEach(post => {
                const imgElement = document.createElement('img');
                imgElement.src = post.media_url;
                imgElement.alt = post.caption || 'Instagram Image';
                imgElement.onclick = () => window.open(post.permalink, '_blank');
                feedContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching Instagram feed:', error));
});