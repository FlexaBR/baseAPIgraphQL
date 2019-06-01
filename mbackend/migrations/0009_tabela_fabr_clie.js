
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fabr_clie', table => {
        table.increments('id').primary()
        table.integer('fabrica_id').unsigned()
        table.foreign('fabrica_id').references('fabricas.id')
        table.integer('cliente_id').unsigned()
        table.foreign('cliente_id').references('clientes.id')
        table.integer('preposto_id').unsigned()
        table.foreign('preposto_id').references('prepostos.id')
        table.decimal('comiClie', 6, 2)
        table.string('tabela')
        table.string('atualPor')
        table.dateTime('dataAtual')
            .defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fabr_clie')
};
