import React from 'react';
import Item from './Item';

const Items = () => {
    const totalItems = [
        {
            id: 1,
            name: "Asus Vivobook X515MA",
            stock: 20,
            quantity: 1,
            price: 35500
        },
        {
            id: 2,
            name: "Dell E1916HV 18.5 Inch",
            stock: 10,
            quantity: 1,
            price: 25500,
        },
        {
            id: 3,
            name: "Canon Eos 4000D 18MP",
            stock: 25,
            quantity: 1,
            price: 45500,
        },
    ];

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {totalItems &&
                totalItems.map((cartItem) => (
                    <Item key={cartItem.id} cartItem={cartItem} />
                ))}
        </div>
    );
};

export default Items;