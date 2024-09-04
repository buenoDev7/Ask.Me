const Sequelize = require('sequelize')
const connection = require('./db_connection')

const Resposta = connection.define('table_respostas0', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo não pode ser vazio"
            }
        }
    },
    corpoResposta: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo não pode ser vazio"
            }
        }
    },
    idPergunta: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "O campo não pode ser vazio"
            }
        }
    },
},
    {
        freezeTableName: true
    }
);

Resposta.sync({ force: false }).then(() => {
    console.log("\n✅ Tabela de respostas sincronizadas")
}).catch((err) => {
    console.log(`\n❌ Erro ao sincronizar Tabela de respostas: [${err}]`)
});

module.exports = Resposta;