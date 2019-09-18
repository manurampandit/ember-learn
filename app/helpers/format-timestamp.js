import { helper } from '@ember/component/helper';
import { dateToString } from 'sample-app/utils/date';

export default helper(function formatTimestamp(params/*, hash*/) {
  return dateToString(params[0]);
  // return params;
});
