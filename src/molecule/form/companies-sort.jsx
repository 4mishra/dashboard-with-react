import React from 'react'

import {
  ButtonBase,
  Form,
  FormControl,
  Label,
  Select
} from '../../atom'
import { defaultCompaniesSort } from '../../static'

const CompaniesSort = ({
  sortBy,
  handleSortBy
}) => {
  return (
    <Form>
      <FormControl>
        <Label hideOnDesktop>
          Sort by
        </Label>
        <Select width={25} name="sltSortCompanies" onChange={(e) => handleSortBy(e.target.value)} value={sortBy}>
          <option defaultValue>&lt; Select below &gt;</option>
          {
            defaultCompaniesSort.map(({ label, value }, index) => (
              <option key={ index } value={ value }>{ label }</option>
            ))
          }
        </Select>
      </FormControl>
    </Form>
  )
}

export default CompaniesSort