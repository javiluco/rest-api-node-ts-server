import { Table, Column, Model, DataType, Default} from 'sequelize-typescript';

@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100) //String es como el VARCHAR
    })
    declare name: string
    
    @Column({
        type: DataType.INTEGER
    })
    declare price: number

    @Default(true)
    @Column({
        type: DataType.BOOLEAN
    })
    declare availability: boolean

}

export default Product;