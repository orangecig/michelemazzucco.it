import React from 'react'
import ListItem from '../ListItem'

const ProfileListItem = ({ name, url }) =>
  <ListItem>
    {url 
      ? <a href={url} target="_blank" rel="noopener">{name}</a>
      : name}
  </ListItem>

export default ProfileListItem