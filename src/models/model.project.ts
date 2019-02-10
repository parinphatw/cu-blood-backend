import Sequelize from 'sequelize'
import { sequelize } from '../utils/util.database'

export const Project = sequelize.define('project', {
    name: {type: Sequelize.STRING},
    registrationStartDate: {type: Sequelize.DATE},
    registrationEndDate: {type: Sequelize.DATE},
    startDate: {type: Sequelize.DATE},
    endDate: {type: Sequelize.DATE}
}, {
    underscored: false,
    underscoredAll: false
})