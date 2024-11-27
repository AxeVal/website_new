import React, { useState, useEffect } from 'react';

function PostsPanel() {
  const [posts, setPosts] = useState([]);
  const [displayCount, setDisplayCount] = useState(1);

  const handleSliderChange = (event) => {
    setDisplayCount(event.target.value);
  };

  const [selectedImage, setSelectedImage] = useState(null);
    const [invertedImage, setInvertedImage] = useState(null);

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleImageUpload = async () => {
        if (!selectedImage) return;

        const formData = new FormData();
        formData.append('file', selectedImage);

        try {
            const response = await fetch('http://localhost:8000/invert-image', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Ошибка при загрузке изображения');
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setInvertedImage(imageUrl);
        } catch (error) {
            console.error('Ошибка при загрузке изображения:', error);
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8000/posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Ошибка при загрузке постов:', error);
            }
        };

        fetchPosts();
    }, []);

  return (
    <div>
      <h1>Посты</h1>
      <div>
        <label htmlFor="postSlider">Количество постов: {displayCount}</label>
        <input
          id="postSlider"
          type="range"
          min="1"
          max={posts.length}
          value={displayCount}
          onChange={handleSliderChange}
        />
      </div>
      <ul>
        {posts.slice(0, displayCount).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h3>Загрузить изображение для инвертирования</h3>
      <label class="label-file" for="fileInput">Выберите файл</label>
      <input type="file" id="fileInput" className="input-file" accept="image/*" onChange={handleImageChange} />
      <button className='small-button' onClick={handleImageUpload}>Инвертировать изображение</button>
      {invertedImage && (
          <div>
              <h4>Инвертированное изображение:</h4>
              <img src={invertedImage} alt="Inverted" />
          </div>
      )}
    </div>
  );
}

export default PostsPanel;
