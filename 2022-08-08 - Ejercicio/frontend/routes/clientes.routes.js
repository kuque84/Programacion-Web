router.get('/clientes', (req, res) => {
    res.sendFile(path.resolve('./views/clientes.html'));
})