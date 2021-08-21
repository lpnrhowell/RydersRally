import React from "react";
import "/_sharing.scss";


export default function SharingBar() {
    return (
        <footer>
            <div className="share-btn-container" id="share">
                <a href="#" class="facebook-btn">
                    <i class="fab fa-facebook"></i>
                </a>

                <a href="#" class="twitter-btn">
                    <i class="fab fa-twitter"></i>
                </a>

                <a href="#" class="instagram-btn">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </footer>
    );
}
