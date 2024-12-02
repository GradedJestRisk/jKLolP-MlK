from deis_rolm.add import add


def test_add():
    assert add(1,2)==3, "add: 1 + 2 should return 3"
