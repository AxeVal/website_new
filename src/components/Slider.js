import React, { useState, useEffect } from 'react';

const Slider = ({ quantityPostsMax, quantityPostsChange, quantityPostsStart }) => {
    const [postCount, updatePostCount] = useState(quantityPostsStart);

    useEffect(() => {
        updatePostCount(quantityPostsStart); // обновление значения, если начальное кол-во изменится
    }, [quantityPostsStart]);

    const reactOnSlider = (event) => {
        const value = Number(event.target.value);
        updatePostCount(value);
        quantityPostsChange(value); // передать новое количество постов в родительский компонент
    };

    return (
        <div className="posts-slider">
            <label htmlFor="postCount">
                Количество постов {postCount}<br/>
            </label>
            <input
                type="range"
                id="postCount"
                min="1"
                max={quantityPostsMax}
                value={postCount}
                onChange={reactOnSlider}
            />
        </div>
    );
};

export default Slider;
