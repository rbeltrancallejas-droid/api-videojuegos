import React from 'react';
import { Card } from './Card';

export const ItemList = ({ items }) => {
    if (!Array.isArray(items) || items.length === 0) {
        return <p className="error-message">No hay elementos para mostrar en la lista.</p>;
    }

    return (
        <div className="item-list">
            {items.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};