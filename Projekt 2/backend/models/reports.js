module.exports = (sequelize, DataTypes) => {
	
	const reports = sequelize.define("reports", {
		report_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		area_code: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		street: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		flat_number: {
			type: DataTypes.STRING,
			allowNull: true, /* allows for no precision */
		},
		caller_name: {
			type: DataTypes.STRING,
			allowNull: true, /* allows anonymity */
		},
		contact_number: {
			type: DataTypes.STRING,
			allowNull: true, /* allows anonymity */
		},
		status: {
			type: DataTypes.ENUM('reported', 'in progress', 'completed', 'canceled'),
			allowNull: false,
		}
	},
	{
		tableName: 'reports',
		timestamps: false
	})
	
	reports.associate = (models) => {
		reports.belongsTo(models.police_officers, {
			foreignKey: 'badge_number',
			as: 'police_officer'
		})
	}
	
	return reports
}