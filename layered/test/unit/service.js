import {expect} from 'chai';
import * as service from "../../src/service.js";

describe('#service', () => {
    describe('#getRooms', () => {
        describe('when the role is user', () => {
            describe('and the hotel has one room', () => {
                it('should return an empty list', () => {
                    // given
                    const role = 'user';
                    const repositoryStub = {
                        getRooms: () => {
                            return [{floor: 0, number: 1, price: 50}]
                        }
                    };

                    // when
                    const rooms = service.getRooms(role, repositoryStub);

                    // then
                    expect(rooms).to.deep.equal([]);
                })
            })
        });
        describe('when the role is administrator', () => {
            describe('and the hotel has one room', () => {
                it('should return this room', () => {
                    // given
                    const role = 'administrator';
                    const repositoryStub = {
                        getRooms: () => {
                            return [{floor: 0, number: 1, price: 50}]
                        }
                    };

                    // when
                    const rooms = service.getRooms(role, repositoryStub);

                    // then
                    expect(rooms).to.deep.equal([{floor: 0, number: 1, price: 50}]);

                })
            })
        });
    });

});