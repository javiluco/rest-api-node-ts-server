import { Table, Column, Model, DataType, Default} from 'sequelize-typescript';

@Table({
    tableName: 'products'
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100) //String es como el VARCHAR
    })
    name: string
    
    @Column({
        type: DataType.INTEGER
    })
    price: number

    @Column({
        type: DataType.BOOLEAN
    })
    availability: boolean

}

export default Product;