import React from 'react'

import {
  ButtonBase,
  Form,
  FormControl,
  Label,
  TextInput
} from '../../atom'

const UserSearch = ({
  searchInput,
  handleSearchInput,
  handleUserDetails
}) => {
  return (
    <Form>
      <FormControl hideOnMobile>
        <ButtonBase buttonType="primary" rounded onClick={(e) => handleUserDetails(e, '', 'create')}>
          Create new
        </ButtonBase>
      </FormControl>
      <FormControl>
        <Label hideOnDesktop>
          Search
        </Label>
        <TextInput type="text" name="txtSearchUsers" placeholder="Find users..." onChange={(e) => handleSearchInput(e.target.value)} value={searchInput} />
      </FormControl>
      <FormControl hideOnDesktop>
        <ButtonBase buttonType="primary" rounded>
          Create new
        </ButtonBase>
      </FormControl>
    </Form>
  )
}

export default UserSearch