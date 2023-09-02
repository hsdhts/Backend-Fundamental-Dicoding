const mapDBToModel = ({
    id,
    title, 
    body,
    tags,
    created_at,
    update_at
}) => ({id,
    title, 
    body,
    tags,
    created_at : created_at,
    update_at : update_at
})

module.exports = {mapDBToModel}
