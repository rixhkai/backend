"use strict";
module.exports = (sequelize, DataTypes) => {
 const articles = sequelize.define(
  "articles",
  {
   title: DataTypes.STRING,
   content: DataTypes.STRING,
   image: DataTypes.STRING,
   category_id: DataTypes.INTEGER,
   category_name: DataTypes.STRING,
   is_published: DataTypes.BOOLEAN,
   is_archived: DataTypes.BOOLEAN,
   slug: DataTypes.STRING,
   author_id: DataTypes.INTEGER
  },
  {}
 );
 articles.associate = function(models) {
  // associations can be defined here
  articles.belongsTo(models.users, {
   as: "author",
   foreignKey: "author_id"
  });

  articles.belongsTo(models.categories, {
   as: "category",
   foreignKey: "id"
  });

  articles.hasMany(models.comments, {
   as: "comment",
   foreignKey: "article_id"
  });
 };
 return articles;
};
