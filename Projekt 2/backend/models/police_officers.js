module.exports = (sequelize, DataTypes) => {
	
	const police_officers = sequelize.define("police_officers", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		surname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password_hash: {
			type: DataTypes.STRING(60),
			allowNull: false,
		}
	},
	{
		tableName: 'police_officers',
		timestamps: false
	})
	
	police_officers.associate = (models) => {
		police_officers.hasMany(models.reports, {
			foreignKey: 'badge_number'
		})
	}
	
	return police_officers
}