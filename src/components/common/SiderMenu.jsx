import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

/**
 * Component for cms sider nav menu
 */
class SiderMenu extends Component {
  /**
   * Get relevant url segment to identify
   * opened submenu by checking the url path
   * @param {string} path
   * @returns {array}
   */
  getMenuOpenKeysListBasedOnPath(path) {
    const pathArr = path.split('/');
    const result = pathArr.filter((value, index, array) => {
      return (index !== 0 && index < (array.length - 1)) ? value : null;
    });
    return result;
  }

  render() {
    const { location } = this.props;
    const section = this.getMenuOpenKeysListBasedOnPath(location.pathname);
    return (
      <Sider
        breakpoint="lg"
        collapsible
        width={240}
      >
        <div className="logo" />
        <Menu
          style={{ marginTop: '63px' }}
          theme="dark"
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={section}
          mode="inline"
        >
          <SubMenu
            key="merchant"
            title={(
              <span>
                <Icon type="shop" />
                <span>Merchant</span>
              </span>
)}
          >
            <Menu.Item key="/cms/merchant/list">
              <Link to="/cms/merchant/list">
                <span>Merchant List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/cms/merchant/create">
              <Link to="/cms/merchant/create">
                <span>Create New Merchant</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="user"
            title={(
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
)}
          >
            <Menu.Item key="/cms/user/list">
              <Link to="/cms/user/list">
                <span>User List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/cms/user/create">
              <Link to="/cms/user/create">
                <span>Create New User</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/cms/user/log">
              <Link to="/cms/user/log">
                <span>User Log</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="role"
            title={(
              <span>
                <Icon type="key" />
                <span>Role</span>
              </span>
)}
          >
            <Menu.Item key="/cms/role/list">
              <Link to="/cms/role/list">
                <span>Role List</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/cms/role/create">
              <Link to="/cms/role/create">
                <span>Create New Role</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="permission"
              title={<span><span>Permission</span></span>}
            >
              <Menu.Item key="/cms/role/permission/list">
                <Link to="/cms/role/permission/list">
                  <span>Permission List</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="/cms/role/permission/create">
                <Link to="/cms/role/permission/create">
                  <span>Create New Permission</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

SiderMenu.propTypes = {
  location: PropTypes.object,
};

export default withRouter(SiderMenu);
