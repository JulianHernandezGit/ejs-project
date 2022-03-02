const express = require('express');

const listaPlatos = [
    {
        id: 1,
        titulo: 'Carpaccio fresco',
        descripcionCorta: 'Entrada Carpaccio de salmón con cítricos',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '65.50',
        img: '/img/Carpaccio-de-salmon.jpg'
    },
    {
        id: 2,
        titulo: 'Risotto de berenjena',
        descripcionCorta: 'Risotto de berenjena y queso de cabra',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '47.00',
        img: '/img/Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id: 3,
        titulo: 'Mousse de arroz',
        descripcionCorta: 'Mousse de arroz con leche y aroma de azahar',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '27.50',
        img: '/img/Mousse-de-arroz-con-leche.jpg'
    }
]

const controlador = {
    index: (req, res) => {
        res.render('index', { menu: listaPlatos });
    },
    detalleMenu: (req, res) => {
        let id = req.params.id;
        res.render('detalleMenu', { menu: listaPlatos.find(plato => plato.id == id)});
    },
    about: (req, res) => {
        res.render('/#about');
    },
    menu: (req, res) => {
        res.render('/#menu');
    }
}

module.exports = controlador;