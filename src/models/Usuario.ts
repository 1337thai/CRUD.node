import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface usuarioInstance extends Model{
    id: number
    nome: string
    email: string
}

export const Usuario = sequelize.define<usuarioInstance>("Usuario,",{
  id:{
  primaryKey:true,
  type:DataTypes.INTEGER 
  },
  nome:{
    type: DataTypes.STRING
  },
  email:{
    type:DataTypes.STRING
  }
},{
    tableName:'usuarios',
    timestamps:false
})