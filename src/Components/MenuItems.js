import React from 'react';
import './MenuItems.css';

function MenuItems() {
    return (<div className="list-group">
        <a href="/about" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="menu-item">
                <h2 className="mb-1">About Us</h2>
            </div>
        </a>
        <a href="/events" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="menu-item">
                <h2 className="mb-1">Events</h2>
            </div>
        </a>
        <a href="/members" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="menu-item">
                <h2 className="mb-1">Members</h2>
            </div>
        </a>
        <a href="/inventory" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="menu-item">
                <h2 className="mb-1">Inventory</h2>
            </div>
        </a>
        <a href="/contact" className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="menu-item">
                <h2 className="mb-1">Contact Us</h2>
            </div>
        </a>
    </div>);
}

export default MenuItems;
