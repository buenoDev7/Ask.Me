const Sequelize = require('sequelize');
const connection = require('./db_connection')

const Pergunta = connection.define('table_perguntas0', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo não pode ser vazio"
            }
        }
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo não pode ser vazio"
            }
        }
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo não pode ser vazio"
            }
        }
    }
},
    {
        freezeTableName: true
    }
);

Pergunta.sync({ force: false }).then(() => {
    console.log("\n✅ Tabela de Perguntas atualizada!")
}).catch((err) => {
    console.log(`\n❌ Erro ao atualizar tabela de Perguntas: [${err}]`)
});

module.exports = Pergunta;