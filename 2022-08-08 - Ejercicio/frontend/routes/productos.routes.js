router.get('/productos', (req, res) => {
    res.sendFile(path.resolve('./views/productos.html'));
})