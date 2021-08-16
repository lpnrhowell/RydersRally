import React from "react";
import "../styles/_sharing.scss";


export default function SharingBar() {
	return (
        <footer>
        <div class="share-btn-container">
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
