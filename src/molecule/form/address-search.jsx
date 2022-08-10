import React from 'react'

import {
  Form,
  FormControl,
  Label,
  TextInput
} from '../../atom'

const AddressSearch = ({
  searchInput,
  handleSearchInput
}) => {
  return (
    <Form>
      <FormControl>
        <Label hideOnDesktop>
          Search
        </Label>
        <TextInput width={50} type="text" name="txtSearchAddress" placeholder="Find addresses..." onChange={(e) => handleSearchInput(e.target.value)} value={searchInput} />
      </FormControl>
    </Form>
  )
}

export default AddressSearch