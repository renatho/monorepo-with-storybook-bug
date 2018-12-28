import React from 'react';
import Dep1 from 'dep1';
import _ from 'lodash';

console.log('Root', _.concat, _);

const Temp2 = () => <div>Hey! <Dep1 /></div>

export default Temp2;
