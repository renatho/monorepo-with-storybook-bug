import React from 'react';
import _ from 'lodash';

console.log('dep1', _.concat, _);

const Dep1 = () => <div>Dep 1</div>;

export default Dep1;
