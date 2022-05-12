import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <section className="container mt-5">
      <div>
        <h1 className='mt-3'>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
}