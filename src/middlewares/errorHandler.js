const errorHandler = (err, req, res, next) => {
    console.error(err)
    return res.status(500).json({
        error: "Erro no servidor, verifique sua requisição!"
    })
}

export default errorHandler