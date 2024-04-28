import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
  return (
    <div>
        <h1>
            !Oops .... {error.status}
        </h1>
        <p>
            {error.statusText}
        </p>
    </div>
  )
}
