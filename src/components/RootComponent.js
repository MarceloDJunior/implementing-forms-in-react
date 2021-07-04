import { Fragment } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import VanillaReactSignInComponent from "./forms/vanilla-react/SingInComponent"
import FormikSignInComponent from "./forms/formik/SingInComponent"
import FormikWithYupSignInComponent from "./forms/formik-with-yup/SingInComponent"
import CreateInvoiceComponent from "./forms/reusable-custom-form-elements/CreateInvoiceComponent"
import UncontrolledCreateInvoiceComponent from "./forms/uncontrolled-vanilla-react/CreateInvoiceComponent"
import UncontrolledReactHookForm from "./forms/uncontrolled-react-hook/SimpleForm"
import Menu from "./menu"

const RootComponent = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route
          exact
            path="/"
            component={VanillaReactSignInComponent} />
          <Route
            path="/vanilla-react"
            component={VanillaReactSignInComponent}
          />
          <Route
            path="/formik"
            component={FormikSignInComponent}
          />
          <Route
            path="/formik-with-yup"
            component={FormikWithYupSignInComponent}
          />
          <Route
            path="/reusable-custom-form-elements"
            component={CreateInvoiceComponent}
          />
          <Route
            path="/uncontrolled-vanilla-react"
            component={UncontrolledCreateInvoiceComponent}
          />
          <Route
            path="/uncontrolled-react-hook-form"
            component={UncontrolledReactHookForm}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default RootComponent;