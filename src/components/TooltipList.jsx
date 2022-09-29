import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPlaylists } from '../store/mylist/mylist.slice';
import { TooltipListContainer } from '../styles/TooltipList.styles';

const TooltipList = () => {
  const playlists = useSelector(selectAllPlaylists);
  return (
    <TooltipListContainer>
      {playlists.map((playlist) => (
        <p> {playlist.name}</p>
      ))}
    </TooltipListContainer>
  );
};

export default TooltipList;
