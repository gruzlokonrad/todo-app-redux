import React from 'react'
import { useSelector } from 'react-redux'
import { getAllLists } from '../../redux/selectors'
import { Link } from 'react-router-dom'
import styles from './Lists.module.scss'
import ListForm from '../ListForm/ListForm'

const Lists = () => {
  const listData = useSelector(getAllLists)

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
      {listData.map(list => (
        <Link key={list.id} to={`list/${list.id}`} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}
      <ListForm />
    </section>
  );
}

export default Lists