import React from 'react'

export const PostItemPlaceHolder = () => {
    return (
        <article className="Post-item-placeholder">
            <div className="Post-item-image-placeholder"></div>
            <div className="Post-item-content-placeholder">
                <div className="Post-content-date"></div>
                <div className="Post-content-title"></div>
                <div className="Post-content-extract"></div>
                <div className="Post-content-extract"></div>
                <div className="Post-content-footer">
                    <div className="Post-content-category"></div>
                    <div className="Post-content-author"></div>
                </div>
            </div>
        </article>
    )
}
