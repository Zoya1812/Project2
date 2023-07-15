import { createSelector } from "@reduxjs/toolkit";

export const selectCartModule = (state) => state.cart;

export const selectDishCount = (state, { dishId }) =>
selectCartModule(state)[dishId] || 0;
// вернуть количество блюд

export const selectCartEntries = (state) => 
Object.entries(selectCartModule(state))
// Object.entries(obj): Возвращает массив массивов, каждый из 
// которых содержит пару ключ-значение для каждого собственного 
// перечисляемого свойства объекта obj.

export const selectCartIds = createSelector(selectCartModule, (state) => 
    Object.keys(state)
);
