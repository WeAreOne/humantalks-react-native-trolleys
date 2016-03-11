import React from 'react-native';
import JSONUtils from '../../../App/Utils/JSONUtils';
import { expect } from 'chai';


describe('JSONUtils tests', function() {
    describe('#transform()', function () {
        it('should return a transformed array', function () {
            let originalData =  [
                {
                    "number_of_trolleys" : "8",
                    "year" : "2005",
                    "river" : "Avon (New Cut)"
                }
                , {
                    "number_of_trolleys" : "19",
                    "year" : "2007",
                    "river" : "Avon (New Cut)"
                }
                , {
                    "number_of_trolleys" : "11",
                    "year" : "2008",
                    "river" : "Avon (New Cut)"
                }
            ];

            let expectedData = [{
                name: 'Avon (New Cut)',
                data: [
                    {year: "2005", "number_of_trolleys" : "8"},
                    {year: "2007", "number_of_trolleys" : "19"},
                    {year: "2008", "number_of_trolleys" : "11"}
                ]
            }];

            let data = JSONUtils.transform(originalData);

            expect(data).to.deep.equal(expectedData);
        });
    });
});